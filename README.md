# Project Name: WhereIsIt (A Find and Lost items related website)
 <div align="center">
  <img height="500" width="100%" src="https://github.com/Chitra35006/5_practice/blob/a8bc780bcb15c9a72e3f329ff3ace1d91051c2fc/w1.png" />
</div>

## :::Description:::
This project is a Lost and Found Website, a platform designed to connect individuals who have lost 
personal belongings with those who may have found them. Users can report lost items, browse found 
items, and interact to recover their belongings. Developing this website provides practical experience in 
building full-stack applications, user authentication, file uploads, database management, and API 
integration

## :::Project Features:::
1. Responsive Design
2. Firebase Authentication
3. Add Post For Lost & Found Item
4. Post Details Page
5. Manage Item Page 
6. All Recovered Item Page
7. Update Item & Delete Item
8. User Friendly Interactivity
9. Search Item Based on title & Location

<h3 align="left">::: Technologies Used :::</h3>
<div style="display: block; width: 100%; margin-bottom: 20px;">
  <table width="100%" style="border-collapse: collapse;">
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Category</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Technologies</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Frontend</td>
      <td style="border: 1px solid #ddd; padding: 8px;">React.js, TailwindCSS, Daisy UI</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Backend</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Node.js, Express.js</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Database</td>
      <td style="border: 1px solid #ddd; padding: 8px;">MongoDB</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Authentication</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Firebase Authentication</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Hosting</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Client (Firebase), Server (Vercel)</td>
    </tr>
  </table>
</div>

<h3 align="left">::: Dependencies :::</h3>

- @fortawesome/free-solid-svg-icons: ^6.7.1  
- @fortawesome/react-fontawesome: ^0.2.2  
- @tippyjs/react: ^4.2.6  
- date-fns: ^4.1.0  
- firebase: ^11.0.2  
- localforage: ^1.10.0  
- match-sorter: ^8.0.0  
- react: ^18.3.1  
- react-awesome-reveal: ^4.2.14  
- react-axios: ^2.0.6  


## ::: Live Link :::
 https://a-11-whereisit.web.app/

 # 🛠 Setup Instructions

Follow these steps to clone the repository, install dependencies, and run the project on your local machine.

## 1. **Clone the Repository**

Start by cloning the repository to your local machine and navigating into the project directory:

```bash
git clone https://github.com/Chitra35006/A-11-whereIsIt-Client.git
cd A-11-whereIsIt-Client

Install the necessary dependencies using your preferred package manager (npm or yarn):

# Using npm
```bash
npm install

# Or using yarn
```bash
yarn install
 Create a .env file in the root directory of the project:
```bash
touch .env
Add the following variables to your .env file:

env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
VITE_Payment_Gateway_PK=your_payment_gateway_pk

4. Run the Application
You're all set to run the application locally.

bash
# Using npm
npm run dev

# Or using yarn
yarn

5. Access the Application
Open your web browser and navigate to:

http://localhost:5173
