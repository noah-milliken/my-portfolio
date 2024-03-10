function sendEmail(data: any) {
  const apiEndpoint = `/api/email`;

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}

function sendUpdate(url: any) {
  console.log(JSON.stringify(url));
  const apiEndpoint = `http://localhost:3000/api/update`;
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(url),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("from response:", response);
    })
    .catch((err) => {});
}

export { sendEmail, sendUpdate };
