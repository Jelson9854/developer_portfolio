
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon, ReGateIcon } from "./Icons";
import {motion} from 'framer-motion';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-auto px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About Me" className="mx-4" />
        <CustomLink href="/publications" title="Research" className="mx-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://x.com/jelson9854" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3">
          <TwitterIcon />
        </motion.a>

        <motion.a href="https://github.com/Jelson9854?tab=repositories" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3">
          <GithubIcon />
        </motion.a>

        <motion.a href="https://www.linkedin.com/in/jelsonandrew/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3">
          <LinkedInIcon />
        </motion.a>

        <motion.a href="https://www.researchgate.net/profile/Andrew-Jelson?ev=hdr_xprf" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3">
          <ReGateIcon />
        </motion.a>

      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
