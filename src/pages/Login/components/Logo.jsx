import { chakra } from '@chakra-ui/react'
import { Center } from "@chakra-ui/react";



export const Logo = (props) => (
  <Center >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      viewBox="0 0 50 50"
    >
      <circle cx="25" cy="25" r="25" fill="	#F5F5DC" />
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        alignment-baseline="middle"
        font-family="Arial"
        font-size="18"
        font-weight="bold"
        fill="white"
      >
        Fa
      </text>
    </svg>
    </Center>
);
