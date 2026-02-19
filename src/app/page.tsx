import { Linkedin, Github, DollarSign, Youtube } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/8bit/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/8bit/avatar";
import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import { Separator } from "@/components/ui/8bit/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/8bit/tooltip";

const socialLinks = [
  {
    href: "http://ph.linkedin.com/in/aqlx86",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/aqlx86",
    label: "Github",
    icon: Github,
  },
  {
    href: "https://paypal.me/aqlx86",
    label: "Paypal",
    icon: DollarSign,
  },
  {
    href: "https://www.youtube.com/@PSKMoto?sub_confirmation=1",
    label: "Youtube",
    icon: Youtube,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center gap-4 text-center">
          <Avatar className="size-32">
            <AvatarImage src="/images/me.jpg" alt="Arnel Q. Labarda" />
            <AvatarFallback>AQL</AvatarFallback>
          </Avatar>
          <h1 className="retro text-lg">Arnel Q. Labarda</h1>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary">programmer</Badge>
            <Badge variant="secondary">gamer</Badge>
            <Badge variant="secondary">rider</Badge>
          </div>
          <Separator className="my-2" />
        </CardContent>

        <CardFooter className="flex justify-center gap-2">
          {socialLinks.map((link) => (
            <Tooltip key={link.label}>
              <TooltipTrigger>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="size-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </CardFooter>
      </Card>
    </main>
  );
}
