import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Mailbox",
        icon: <MailIcon />,
        link: "/mailbox"
    },
    {
        title: "User",
        icon: <GroupIcon />,
        link: "/user"
    },
    {
        title: "Crytpo-Api",
        icon: <EnhancedEncryptionIcon />,
        link: "/cryptoApi"
    },
    {
        title: "Profile",
        icon: <AccountBoxIcon />,
        link: "/profile"
    },
]
