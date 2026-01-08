const fetchData = async () => {
  // const res = await fetch("");
  const res = await fetch("./exel-to-json/data.json");
  const json = res.json();
  return json;
};
export { fetchData };
