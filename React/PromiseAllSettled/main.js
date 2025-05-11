import { useEffect, useState } from "react";
import "./styles.css";
//https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/users/${item?.id}

export default function App() {
  const [responseID, setResponseId] = useState([]);
  const [responseData, setResponseDate] = useState([]);
  const fetchUserId = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setResponseId(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const fetchUserData = async (item) => {
    try {
      const userIdsArray = item.map(async (item) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${item?.id}`
        );
        return res.json();
      });
      const res = await Promise.allSettled(userIdsArray);
      setResponseDate(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUserId("https://jsonplaceholder.typicode.com/users");
  }, []);

  useEffect(() => {
    if (responseID.length > 0) {
      fetchUserData(responseID);
    }
  }, [responseID.length]);

  console.log(responseData);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>{"id"}</th>
            <th>{"Name"}</th>
            <th>{"Email"}</th>
            <th>{"Website"}</th>
            <th>{"City"}</th>
          </tr>
        </thead>
        {responseData && responseData.length > 0
          ? responseData.map((data) => {
              return (
                <tbody>
                  <tr key={data.id}>
                    <td>{data.value.id}</td>
                    <td>{data.value.name}</td>
                    <td>{data.value.email}</td>
                    <td>{data.value.website}</td>
                    <td>{data.value.address.city}</td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </table>
    </div>
  );
}
