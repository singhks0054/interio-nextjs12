import axios from "axios";
import React from "react";
import DesignList from "../../components/DesignList";
import { shotDataArr } from "../../types/shotType";
import Layout from "./Layout";

const Profile = (shots: shotDataArr) => {
  return (
    <Layout>
      <DesignList shots={shots} />
    </Layout>
  );
};

export default Profile;

export async function getServerSideProps() {
  let result = { shots: [] };

  const { data } = await axios.get(`${process.env.API_URL}/shot`);
  if (data?.data) {
    result = { shots: data.data };
  }

  return {
    props: result,
  };
}
