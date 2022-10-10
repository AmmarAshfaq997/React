import React from "react";
import { Empty } from "antd";
import { Typography, Card } from "../../atoms";
import { User } from "../../../types";
import { Container } from "../BlogDetailCard";
type Props = {
  data: User | null | any;
};
const DashboardProfile: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data ? (
        <Card title={"User Detail"} bordered={false} margin={20} width={"100%"}>
          <>
            <Typography direction="block">Name: {data.name}</Typography>
            <Typography direction="block">
              User Name: {data.username}
            </Typography>
            <Typography direction="block">
              Phone Number: {data.phone}
            </Typography>
            <Typography direction="block">Email: {data.email}</Typography>

            <Typography direction="block" texttype="title">
              Address:
            </Typography>
            <Typography direction="block">City: {data.address.city}</Typography>
            <Typography direction="block">
              Street: {data.address.street}
            </Typography>
            <Typography direction="block">
              Suite: {data.address.suite}
            </Typography>
            <Typography direction="block">
              Zipcode: {data.address.zipcode}
            </Typography>

            <Typography direction="block" texttype="title">
              Company:
            </Typography>
            <Typography direction="block">{data.company.name}</Typography>
            <Typography direction="block">
              {data.company.catchPhrase}
            </Typography>
            <Typography direction="block">{data.company.bs}</Typography>
          </>
        </Card>
      ) : (
        <Card
          title={"User Detail"}
          bordered={false}
          style={{ margin: 20, width: "100%" }}
        >
          <Empty />
        </Card>
      )}
    </Container>
  );
};

export default DashboardProfile;
