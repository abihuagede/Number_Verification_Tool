async function verifyNum() {
  const output = document.getElementById("output");

  const inserctNum = document.getElementById("inserctNum").value.trim();
  const apiKey = "ae7b06bd5534a17233c7a57d6e56d037";
  const apiURL = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${inserctNum}&format=1`;

  try {
    const res = await fetch(apiURL);
    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();

    const validN = data.valid || "Couldnt Get Data";
    const numberV = data.number || "Couldnt Get Data";
    const localformatV = data.local_format || "Couldnt Get Data";
    const internationalformatV =
      data.international_format || "Couldnt Get Data";
    const country_prefixV = data.country_prefix || "Couldnt Get Data";
    const country_codeV = data.country_code || "Couldnt Get Data";
    const country_nameV = data.country_name || "Couldnt Get Data";
    const locationV = data.location || "Couldnt Get Data";
    const carrierV = data.carrier || "Couldnt Get Data";
    const linetypeV = data.line_type || "Couldnt Get Data";

    const flagC = `https://flagcdn.com/32x24/${country_codeV.toLowerCase()}.png`;

    console.log(data);
    output.innerHTML = `
    Valid: ${validN}  <img src="images/green-check-mark-icon-in-round-shape-design-png.webp" width=50px; height=50px; alt=" ">  
    <p> PhoneNumber: ${numberV}  <img src="${flagC}" width=50px; height=30px; alt=" ">   
    <p>LocalFormat: ${localformatV}</p>
    InternationalFormat: ${internationalformatV}   <img src="${flagC}" width=50px; height=30px; alt=" ">  <br> 
    <p>CountryPrefix: ${country_prefixV}  
     CountryCode: ${country_codeV} <img src="${flagC}" width=50px; height=30px; alt=" ">   
    <p>Location: ${locationV}</p>  
 CountryName: ${country_nameV} <img src="${flagC}" width=50px; height=30px; alt=" "> 
    <p>Carrier: ${carrierV}</p>
    <p>LineType: ${linetypeV}</p>
       `;
  } catch (error) {
    console.log("Error fetching number data:", error.message);
    output.textContent = "Couldnt Fetch Data";
  }
}
