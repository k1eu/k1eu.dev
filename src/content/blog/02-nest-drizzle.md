---
title: "Integrate NestJS with Drizzle ORM"
description: "How to integrate and use Drizzle ORM with NestJS backend framework"
pubDate: "Nov 15 2023"
heroImage: "/02/drizzlelol.png"
---

I’m not even gonna try to convince anyone to use drizzle. Who used few of the already knows, so here are condesed steps to get it working with NestJS.

## Module

To start we will need to install few packages, the postgres driver, drizzle orm itself and the custom drizzle module for NestJS. You can do that by using this commands

```jsx
// npm
npm install @knaadh/nestjs-drizzle-postgres drizzle-orm postgres

// yarn
yarn add @knaadh/nestjs-drizzle-postgres drizzle-orm postgres

// pnpm
pnpm add @knaadh/nestjs-drizzle-postgres drizzle-orm postgres

// bun
bun add @knaadh/nestjs-drizzle-postgres drizzle-orm postgres
```

First we’d like to create a sample schema of our database for the drizzle orm. To start with it we will create a `src/db` folder in which we will create a `schema.ts` file.

![Db](/02/db.png)

Inside the `schema.ts` we’d like to create eg. our users schema, but you can do anthing you want.

```tsx
import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").unique().notNull(),
});
```

After the schema we’re ready to configure! In our main `app.module.ts` we need to register the drizzle module. DrizzlePostgresModule is Global by default so it will be accessible in the whole app if you register it in the App.

```tsx
import * as schema from "./db/schema";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    DrizzlePostgresModule.register({
      tag: DrizzleInstance,
      postgres: {
        url: process.env.DATABASE_URL,
      },
      config: { schema: { ...schema } },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
```

Important notes here

- DrizzleInstance is a string constant that you will use to access the db module (you can have multiple drizzle instances for diffrent dbs)
- You should have the DATABASE_URL in your .env and have the [ConfigModule](https://docs.nestjs.com/techniques/configuration) configured

You’re set! 🎉 now in any service you can use drizzle orm to access your database as such:

(DrizzleInstance is our Tag that we set in previous step)

```tsx
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "../db/schema";
import { DrizzleInstance } from "src/config/config";

@Injectable()
export class UsersService {
  constructor(
    @Inject(DrizzleInstance) private db: PostgresJsDatabase<typeof schema>
  ) {}

  async findAllUsers() {
    // At the time of writing without providing any options to find many users type
    // get lost along the way - so I'm using this dirty hack
    return await this.db.query.users.findMany({
      limit: undefined,
    });
  }
}
```

Bonus Tips

By leveraging Typebox you will be able to get the Types out of our schema like this:

```tsx
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { Static } from "@sinclair/typebox";

const UserSchema = createSelectSchema(users);
const UserInsertSchema = createInsertSchema(users);

export type UserInsert = Omit<Static<typeof UserInsertSchema>, "id">;
export type User = Static<typeof UserSchema>;
```

and you can use them in your actions

```tsx
async findUser(id: string): Promise<User | null> {
    return this.db.query.users.findFirst({ where: eq(users.id, id) });
}
```

In the next part I will show how to create migrations with drizzle-kit with NestJS.

Thank you so much for reading. If anything you can find me on X as [@k1euu](https://twitter.com/k1euu)
