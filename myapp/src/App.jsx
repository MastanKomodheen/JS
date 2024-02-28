import React from "react"
import Usestate from "./components/Usestate"
import UserData from "./components/UserData"
function App() {
  const data =
  {
    "banners": [
      {
        "id": "191",
        "name": "GoldHome4",
        "imageUrl": "https://kimages.kreditbee.in/Banners/20240102-24KDG-1D_Banner.png",
        "actionLink": "/gold/home",
        "partnerLink": "",
        "voucherCode": "",
        "startTime": "2023-11-11T00:01:00+05:30",
        "endTime": "2025-03-31T23:59:00+05:30",
        "description": "",
        "partnerImage": "https://kimages.kreditbee.in/Banners/20240102-24KDG-1D_Banner.png",
        "type": "homePageBanner",
        "priority": "1"
      },
      {
        "id": "230",
        "name": "SME Loans",
        "imageUrl": "https://kimages.kreditbee.in/Banners%2F20240214-LAP-1A_Banner.png",
        "actionLink": "/lap-lead",
        "partnerLink": "",
        "voucherCode": "",
        "startTime": "2023-08-26T11:00:00+05:30",
        "endTime": "2024-12-31T23:59:00+05:30",
        "description": "",
        "partnerImage": "https://kimages.kreditbee.in/Banners%2F20240214-LAP-1A_Banner.png",
        "type": "homePageBanner",
        "priority": "1"
      },
      {
        "id": "170",
        "name": "SAConfirmNA",
        "imageUrl": "https://kimages.kreditbee.in/Banners/20240201-SANA-1A_Banner.png",
        "actionLink": "/employment/summary",
        "partnerLink": "",
        "voucherCode": "",
        "startTime": "2022-11-09T15:18:00+05:30",
        "endTime": "2024-02-29T23:59:00+05:30",
        "description": "Fill Emp Details",
        "partnerImage": "https://kimages.kreditbee.in/Banners/20240201-SANA-1A_Banner.png",
        "type": "homePageBanner",
        "priority": "3"
      },
      {
        "id": "111",
        "name": "Referral New",
        "imageUrl": "https://kimages.kreditbee.in/Banners/20230314-Referal-1A_Banner.png",
        "actionLink": "/refer/refer-earn",
        "partnerLink": "",
        "voucherCode": "",
        "startTime": "2022-01-07T14:29:00+05:30",
        "endTime": "2024-12-31T14:29:00+05:30",
        "description": "Referral for both Referrer and Referree",
        "partnerImage": "https://kimages.kreditbee.in/Banners/20230314-Referal-1A_Banner.png",
        "type": "homePageBanner",
        "priority": "5"
      }
    ]
  }
  return (

   <>
   <UserData/>
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>

      {
        data.banners.map(data => {
          return (
            <tr key="">
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.partnerImage}</td>
            </tr>
          )
        })
      }


    </table>
    <Usestate/>
   </>
  )
}

export default App
