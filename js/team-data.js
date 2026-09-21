// Edit this file to modify the team members' information.
// You can update names, roles, images, biographies, emails, and LinkedIn profiles.

const TEAM_MEMBERS = [
    {
        id: "1",
        name: "Satyam Patil",
        role: "Chair",
        img: "https://ui-avatars.com/api/?name=Satyam+Patil&background=1e3a8a&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "satyam@example.com",
        linkedin: "#"
    },
    {
        id: "2",
        name: "Prasad Chitnis",
        role: "Vice-chair",
        img: "https://ui-avatars.com/api/?name=Prasad+Chitnis&background=3b82f6&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "prasad@example.com",
        linkedin: "#"
    },
    {
        id: "3",
        name: "Sahil Patil",
        role: "Secretary",
        img: "https://ui-avatars.com/api/?name=Sahil+Patil&background=f59e0b&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "sahil@example.com",
        linkedin: "#"
    },
    {
        id: "4",
        name: "Prajol Hundre",
        role: "Treasurer",
        img: "https://ui-avatars.com/api/?name=Prajol+Hundre&background=10b981&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "prajol@example.com",
        linkedin: "#"
    },
    {
        id: "5",
        name: "Sakshi Natakle",
        role: "Web Master",
        img: "https://ui-avatars.com/api/?name=Sakshi+Natakle&background=8b5cf6&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "sakshi@example.com",
        linkedin: "#"
    },
    {
        id: "6",
        name: "Yadnesh Shivpuje",
        role: "Web Team",
        img: "https://ui-avatars.com/api/?name=Yadnesh+Shivpuje&background=6b7280&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "yadnesh@example.com",
        linkedin: "#"
    },
    {
        id: "7",
        name: "Swaranjali Jadhav",
        role: "Web Team",
        img: "https://ui-avatars.com/api/?name=Swaranjali+Jadhav&background=6b7280&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "swaranjali@example.com",
        linkedin: "#"
    },
    {
        id: "8",
        name: "Abhijeet Patil",
        role: "Social Media (Lead)",
        img: "https://ui-avatars.com/api/?name=Abhijeet+Patil&background=ef4444&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "abhijeet@example.com",
        linkedin: "#"
    },
    {
        id: "9",
        name: "Durwank Mahajan",
        role: "Public Relation (Lead)",
        img: "assets/durwank.jpg",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "durwank@example.com",
        linkedin: "#"
    },
    {
        id: "10",
        name: "Riya Kamble",
        role: "PR Team",
        img: "https://ui-avatars.com/api/?name=Riya+Kamble&background=0ea5e9&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "riya@example.com",
        linkedin: "#"
    },
    {
        id: "11",
        name: "Shreya Ranade",
        role: "PR Team",
        img: "https://ui-avatars.com/api/?name=Shreya+Ranade&background=0ea5e9&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "shreya@example.com",
        linkedin: "#"
    },
    {
        id: "12",
        name: "Mrunal Patil",
        role: "Management (Lead)",
        img: "https://ui-avatars.com/api/?name=Mrunal+Patil&background=f97316&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "mrunal@example.com",
        linkedin: "#"
    },
    {
        id: "13",
        name: "Sonali Patil",
        role: "Management Team",
        img: "https://ui-avatars.com/api/?name=Sonali+Patil&background=fbbf24&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "sonali@example.com",
        linkedin: "#"
    },
    {
        id: "14",
        name: "Shubhada Bahirat",
        role: "Management Team",
        img: "https://ui-avatars.com/api/?name=Shubhada+Bahirat&background=fbbf24&color=fff&size=500",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "shubhada@example.com",
        linkedin: "#"
    },
    // Adding 5 Volunteer Cards
    {
        id: "15",
        name: "Volunteer One",
        role: "Volunteer",
        img: "https://ui-avatars.com/api/?name=Volunteer+One&background=cbd5e1&color=334155&size=500",
        bio: "Dedicated volunteer contributing to the success of COMSA events and activities.",
        email: "volunteer1@example.com",
        linkedin: "#"
    },
    {
        id: "16",
        name: "Volunteer Two",
        role: "Volunteer",
        img: "https://ui-avatars.com/api/?name=Volunteer+Two&background=cbd5e1&color=334155&size=500",
        bio: "Dedicated volunteer contributing to the success of COMSA events and activities.",
        email: "volunteer2@example.com",
        linkedin: "#"
    },
    {
        id: "17",
        name: "Volunteer Three",
        role: "Volunteer",
        img: "https://ui-avatars.com/api/?name=Volunteer+Three&background=cbd5e1&color=334155&size=500",
        bio: "Dedicated volunteer contributing to the success of COMSA events and activities.",
        email: "volunteer3@example.com",
        linkedin: "#"
    },
    {
        id: "18",
        name: "Volunteer Four",
        role: "Volunteer",
        img: "https://ui-avatars.com/api/?name=Volunteer+Four&background=cbd5e1&color=334155&size=500",
        bio: "Dedicated volunteer contributing to the success of COMSA events and activities.",
        email: "volunteer4@example.com",
        linkedin: "#"
    },
    {
        id: "19",
        name: "Volunteer Five",
        role: "Volunteer",
        img: "https://ui-avatars.com/api/?name=Volunteer+Five&background=cbd5e1&color=334155&size=500",
        bio: "Dedicated volunteer contributing to the success of COMSA events and activities.",
        email: "volunteer5@example.com",
        linkedin: "#"
    }
];
