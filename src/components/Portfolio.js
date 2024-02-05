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
      title: "OTP Encryption",
      description: "A simple one time pad implementation in python",
      githubLink: "https://github.com/Adam-Woodruff",
    },
    {
      title: "String Searching",
      description:
        "An exploration of vairous string searching algorithms and their applications in cryptography",
      githubLink: "https://github.com/Adam-Woodruff",
    },
    {
      title: "Kubernetes cluster",
      description:
        "A local Kubernetes cluster setup on 3 raspberry pis",
      githubLink: "https://github.com/Adam-Woodruff",
    },
  ];

  const HardwareProjects = [
    {
      title: "USB Rubber Duckie",
      description: "My own version of the hak5 usb rubber ducky using a Raspberry Pi Pico for physical pen testing",
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
      <Typography variant="h1" sx={{ paddingBottom: 2 }}>
        Software Projects
      </Typography>
      <ProjectList projects={SoftwareProjects} />
      <Typography variant="h1" sx={{ paddingBottom: 2, paddingTop: 2 }}>
        Hardware Projects
      </Typography>
      <ProjectList projects={HardwareProjects} />
    </Box>
  );
};

export default Portfolio;
