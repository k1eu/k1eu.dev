import {
  LinkedinOutlined,
  MailOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { row } from "./share.module.scss";
const Share = () => {
  return (
    <div className={row}>
      <a href="https://www.linkedin.com/in/tkielarbb/" target="_blank">
        <MailOutlined />
      </a>
      <a href="mailto:me@k1eu.dev">
        <LinkedinOutlined />
      </a>
      <a href="https://twitter.com/k1euu" target="_blank">
        <TwitterOutlined />
      </a>
    </div>
  );
};

export default Share;
