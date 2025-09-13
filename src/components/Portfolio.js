import {
  Box,
  Typography
} from "@mui/material";
import React from "react";
import ProjectList from "./ProjectList";

const Portfolio = () => {
  const SoftwareProjects = [
    {
      title: "SHA-256",
      description: "A python implementation of the SHA-256 algorithm.",
      githubLink: "https://github.com/Adam-Woodruff/SHA-256",
    },
    {
      title: "RSA Encryption",
      description: "An implementation of RSA in python using common practices including modular exponentation and the extended eulidean algorithm as well as fermats test for primality",
      githubLink: "https://github.com/Adam-Woodruff",
    },
    {
      title: "AES Encryption",
      description: "A Python implementation of AES a symmetric block cipher",
      githubLink: "https://github.com/Adam-Woodruff",
    },
    {
      title: "Image Steganography",
      description:
        "A Least significant bit implementation of image steganography disguising a message in any image ",
      githubLink: "https://github.com/Adam-Woodruff",
    },
    {
      title: "Frequency Analysis",
      description:
        "A frequency analysis implementation in Python making use of patterns including bigrams and trigrams to deciper text encrypted by substitution.",
      githubLink: "https://github.com/Adam-Woodruff",
    },
    {
      title: "Dynamic Multi Parallel DNA Diffusion",
      description: "An pythonic implementation of a Image Encryption Scheme based on DNA matrices",
      githubLink: "https://github.com/Adam-Woodruff",
    },
    {
      title: "Feistel Cipher",
      description: "An implementation of the Feistel cipher in python",
      githubLink: "https://github.com/Adam-Woodruff",
    },
    {
      title: "Diffie Helman",
      description: "A series of C# experiments researching elliptic curve and typical Diffie-Hellman key exchange",
      githubLink: "https://github.com/Adam-Woodruff",
    }
  ];

  const security = [
    {
      title: "USB Rubber Ducky",
      description: "My own version of the hak5 usb rubber ducky using a Raspberry Pi Pico for physical pen testing",
      githubLink: "https://github.com/Adam-Woodruff/SHA-256",
    },
    {
      title: "Evilginx",
      description: "Locally experementing with a man-in-the-middle phishing framework capable of bypassing 2fa retrieving login credentials and cookies",
      githubLink: "",
    },
  ]

  const MiscProjects = [
    {
      title: "Company Cryptography Lecture",
      description: "A lecture giving an overview of various cryptographic techniques looking at the algorithms and its applications.",
      githubLink: "https://github.com/Adam-Woodruff/SHA-256",
    },
    {
      title: "Robot",
      description: "A self driving 3D printed robot that makes use of ultra sonic and infrared sensors along with a machine learning model to map and navigate a room",
      githubLink: "https://github.com/Adam-Woodruff",
    }
  ];

  return (
    <Box>
      <Typography variant="h1" sx={{ paddingBottom: "0.5em" }}>
      Security
      </Typography>
      <ProjectList projects={security} />
      <Typography variant="h1" sx={{ paddingBottom: "0.5em", paddingTop: "1em" }}>
        Software Projects
      </Typography>
      <ProjectList projects={SoftwareProjects} />
      <Typography variant="h1" sx={{ paddingBottom: "0.5em", paddingTop: "1em" }}>
        Misc Projects
      </Typography>
      <ProjectList projects={MiscProjects} />
    </Box>
  );
};

export default Portfolio;
