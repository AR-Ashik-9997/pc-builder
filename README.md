# Live-Link: https://pc-builder-lake.vercel.app/

# server-Link: https://github.com/AR-Ashik-9997/pc-builder-server

# PC Builder Application

The PC Builder Application is a user-friendly tool that helps users customize and build their own personal computers based on their specific needs and preferences. Whether you are a gamer, a content creator, or simply looking for a powerful workstation, this application makes it easy to select the right components and build your dream PC.

## Features

1. **Component Selection**: The application allows users to choose from a wide range of components, including CPUs, GPUs, motherboards, RAM, storage devices, power supplies, and computer cases. Each component is categorized and comes with detailed specifications, making it simple for users to compare and select the best options.

2. **Compatibility Check**: One of the most critical aspects of building a PC is ensuring that all the selected components are compatible with each other. The PC Builder Application automatically performs compatibility checks, alerting users if there are any potential issues with their chosen components.


4. **Saved Configurations**: The application allows users to save their custom PC configurations for future reference. Users can create multiple configurations and easily switch between them to compare different setups.


6. **Share and Export Configurations**: Users can share their custom PC configurations with friends, family, or on social media. Additionally, they can export the selected components as a shopping list to make the purchasing process more convenient.

## How to Run the Project

To run the PC Builder Application on your local machine, follow the steps below:

### Prerequisites

1. Make sure you have Node.js and npm (Node Package Manager) installed on your computer. You can download the latest version of Node.js from the official website: https://nodejs.org/

2. You will need a code editor like Visual Studio Code, Sublime Text, or any other of your choice.

### Installation

1. Clone the project repository from GitHub to your local machine using Git or download the ZIP file and extract it.

2. Open your terminal or command prompt and navigate to the project directory.

3. Install the project dependencies by running the following command:

```bash
npm install
```

### Configuration

1. Once you have the API keys, create a `.env` file in the project's root directory.

2. Inside the `.env` file, add the API keys in the following format:

```env
NEXTAUTH_SECRET=secret_key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=GOOGLE_CLIENT_SECRET
```

### Running the Application

With all the dependencies and configurations in place, you can now run the PC Builder Application. Use the following command:

```bash
npm run dev
```

The application should now be running on your local machine. Open your web browser and navigate to `http://localhost:3000` to access the PC Builder Application.

### Usage

1. Browse through the available components and click on the ones you want to add to your configuration.

2. The application will automatically check for component compatibility and provide alerts for any issues.

4. Save your configurations by creating an account or logging in.

7. Enjoy building your perfect PC!

## Contributing

If you find any issues or have suggestions for improvements, feel free to create a pull request or open an issue on our GitHub repository.

Happy PC building! 🖥️💻