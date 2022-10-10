import "./styles.css";
import { Skeleton } from "antd";
import { Typography, Avatar, Button } from "../../atoms";
import { CalendarOutlined, CaretDownOutlined } from "@ant-design/icons";
import styled from "styled-components";
type Props = {
  data: {
    name: string;
  } | null;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const ProfileWithIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const Profile: React.FC<Props> = ({ data }): JSX.Element => {
  return (
    <div>
      {data ? (
        <Container>
          <Avatar src="https://joeschmoe.io/api/v1/random" size={64} />
          <Typography texttype="subTitle" margin="0 0 0 0" aria-label="hello">
            Hello
          </Typography>
          <ProfileWithIcon>
            <Typography texttype="title" margin="0 5px 5px 0px">
              {data?.name}
            </Typography>
            <CaretDownOutlined style={{ color: "#bfbfbf" }} />
          </ProfileWithIcon>
          <Button type="primary">
            <CalendarOutlined />
            Live Metrix
          </Button>
        </Container>
      ) : (
        <Container>
          <Skeleton.Avatar size={64} />
          <Skeleton title style={{ width: "70%" }} />
        </Container>
      )}
    </div>
  );
};

export default Profile;
