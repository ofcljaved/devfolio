export const About = ({ args }: { args: string }) => {
  if (args.trim().length) {
    return <p>Usage: about</p>;
  };

  return <p className="text-balance w-[85ch]">
    Hey, I’m Javed! 👋
    <br />
    I’m a software developer who loves crafting optimized frontend experiences with minimal libraries—less is more. Lately, I’m diving into backend dev with the same vibe.
    <br />
    After my degree, I jumped into a job working closely with customers who use my product. It’s eye-opening—they just want a slick UX, not tech jargon. Now, I’m itching for a switch, hunting for a new gig to shake things up.
    <br />
    I’m all-in on Neovim (bye, VS Code), playing with Lua for configs, Rust for Web3 kicks, and Go to chill out. New tech’s my thrill, and I’m leveling up my coding love before AI takes over. Until then, I’m building and optimizing!
  </p>;
};
