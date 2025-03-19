import { COMMANDS, COMMANDS_HELP } from "@/commands";
import { ShortDesc } from "../shortDesc";

const desiredCommands = COMMANDS.filter(
  (command) =>
    command === "projects" ||
    command === "blog" ||
    command === "education" ||
    command === "about"
);

export const Welcome = () => {
  return (
    <div className="grid grid-cols-[1fr_max_content] gap-2 grid-rows-[max-content_1fr] text-balance">
      <Name />
      <div className="text-balance">
        <p>Welcome to my interactive terminal portfolio</p>
        <p>Explore my projects, latest blog post, education, and more—all with simple commands.</p>
        <br />
        <p>Try these to get started:</p>
        <div className="py-2">
          {desiredCommands.map((command) => (
            <ShortDesc key={command} isCommand={true} cmd={command} shortDesc={COMMANDS_HELP[command].shortDesc} />
          ))}
        </div>
        <p>For a full list of available commands, type 'help'.</p>
        <br />
        <p>Let’s have some fun—start typing!</p>
      </div>
      <Pfp />
    </div>
  )
};

const Name = () => {
  return <pre className="text-[10px] font-[revert]">{`
       ▄█    ▄████████  ▄█    █▄     ▄████████ ████████▄ 
      ███   ███    ███ ███    ███   ███    ███ ███   ▀███
      ███   ███    ███ ███    ███   ███    █▀  ███    ███
      ███   ███    ███ ███    ███  ▄███▄▄▄     ███    ███
      ███ ▀███████████ ███    ███ ▀▀███▀▀▀     ███    ███
      ███   ███    ███ ███    ███   ███    █▄  ███    ███
      ███   ███    ███ ███    ███   ███    ███ ███   ▄███
  █▄ ▄███   ███    █▀   ▀██████▀    ██████████ ████████▀ 
  ▀▀▀▀▀▀                                                 
    `}</pre>;
};
const Pfp = () => {
  return <pre className="text-[10px] leading-[10px] col-start-2 row-start-1 -row-end-1">{`
                                                                       
                            .:+X$$$$X$X+.                              
                       .:+$$$$$$$$X$&$$$XX;+                           
                      :X$$XxXXX$$x$XX&X$$xxxX;                         
                    ..$$XxXX$&&&&&$$$&&$$xX$X$$+                       
            .   .  .$$$XXX$&&&&&&&&&&&&$X&&$$$$x   .                   
           .  .    +$$$$XX&&&&&&$$Xxxxx$$&&&&&&&X.                     
           ;:   ;;+$$$$$X$$&x;:.         .x&$$$$&x  ;                  
         ;  ;$$X&&&$$$&XX&$X;.             X$$X$$&X.                   
          .:   .+$$$&X$X$$$x;.             ;&&$$$$Xx:;:;+:             
           x. :X$$$$$$X$$&$+:              .$&&&&&$$$$X; :             
          ;:XX$$X$&&$X$$$&$$Xxx;:..;X&&&$$$++&&$&&&&$$x.               
          $+$$&&&&&$$$$$&&&XX$$$X: ;x$$&$Xx. $&&&$$$$$$:               
         $$+;$&$&&&&$&&&&&&$x+;;:.  .;+;;:   ;&&&&&&&$$$ X             
       :xx xx$$&&&&&&&&$$&x.    ..           :$$$&&&&&$$ XX            
        :$+;X$&$$$&&$$&$&X;     .            ;x:X&&&$+&;;: x:          
         ;xX$$$$&&$$$XX$&X;.... +$$xX:  ;;.;.+::&&$&&$&+;.  x          
     : : ;;$&&&$$$XX$&&&&&x;.:::X$&$&&$X$$;xxX&&&&&&&$x:.:. +          
     :x$$&$x+&&$&&&&&&&&&&$xx&&$$x++;.   xX$&$&&&$$$&&&x.x.:           
             &&&&&&&&$&&&&$&$X   .:;+;: .X$&&&&&&&$$$$&$x+XX.          
         .+X&&&&&$$&$$&&&&&&&&X; :$&$: .X$&&&$&$&$&&&&&$+ .$x          
           &$:$&$&&&&&&&$&&&&&&$xxxXXxXX&&&+.x&&&&&&&&&&$. ; ;         
          :$xx&XX&&&&&&&X&&&+X&&&&&&&&&&&$.  +&&&$&&&&$X+              
            XxXxX$&&&&&&&$&&+:;x$&&&&&$+     +&&$XX$&&XX;              
               ;+x&&&$$$$$&&+:::;++Xx;:.     ;&$XXxX&&Xx+              
     .        ;xxxx$$$$XX$$&x:..::;+x+:     .;$&Xxx$$xxx++.       +    
             :xxXXxxX$$XXXX&$;:...::::.    ..+X&$xxXxxxx++x            
            :+x+xXXXxxXXxxXX&X;:..:;;+;:. ..:+x$X$$xxxx+xx$$X+         
       :   +$$Xx++x$$XxxxxxxX&&&;..:;+;:.....&$$$xxxXxX$X++$XxxXX      
        ;XxxXXxxXX$XX$$Xxx+xx$&&&&&$x::. .x&&&$X+xxXX&&&&$x+$$+Xxxxx   
      xx+xxXXx++xXX$&&$&$$Xx+xX$&&&$$&&&&&&&&&xxXX$&&$$XX$&Xx$XxXXx+x+ 
    x++xxxxXx+x&&$XX$&&&&&&$$x+X$&&$X$$$$&&$X+++$&$&$x X$$&&$X$XxXXXx++
  +x+xxxxxxXX&&&&&+$;;$&$&&&&xx;x+$&$XXX$$Xx$$x&&&$$XX$$+&&$$&&$xxXXXxx
 xXxXXxxxxXXX$&&$$&xXXXX$$&&&&x&&$XxX&XXXxX&&&x&&$&$XxXXx$$$x$&&$xxxXXX
x$XXX$$xxX&&X$&$$$&XXxxXXX&&&&x&&&&$XXxx$&&&$$x&&$&XXxX+X$$$Xx&&&$XxX$$
$$$$$$$XX$&&X&$X$$&&+XxxXXX&$$x&&$$X$$$$$$$$$$x&&$$XXXXX$XX$Xx$&&$$&$$$
$$$&$$$XX&&$X&XX$$$&&xXxxxX&&$x$&&$XXxxxxxX$&$x&$$XXX$+$XXXXXxx$&&$&$$$
$$&$&&&$$&&X$$XX$$$&&$XXxxX$&$x$&&$$XxxxxXX$&$x&X$XXXx&&$$$XXXXX&&$&&&&
&&&&&&&&$&&XXXXXX$$&&&x$xxXX&$x$$&&$XXxxXXX$$$X&$$$X$X&$$$$$XXxX&&&&$&&
    `}</pre>;
}
