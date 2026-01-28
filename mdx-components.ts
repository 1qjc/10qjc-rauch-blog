import { A as a } from "@/app/blog/(post)/components/a";
import { P as p } from "@/app/blog/(post)/components/p";
import { H1 as h1 } from "@/app/blog/(post)/components/h1";
import { H2 as h2 } from "@/app/blog/(post)/components/h2";
import { H3 as h3 } from "@/app/blog/(post)/components/h3";
import { OL as ol } from "@/app/blog/(post)/components/ol";
import { UL as ul } from "@/app/blog/(post)/components/ul";
import { LI as li } from "@/app/blog/(post)/components/li";
import { HR as hr } from "@/app/blog/(post)/components/hr";
import { Code as code } from "@/app/blog/(post)/components/code";
import { Tweet } from "@/app/blog/(post)/components/tweet";
import { Image } from "@/app/blog/(post)/components/image";
import { Figure } from "@/app/blog/(post)/components/figure";
import { Snippet } from "@/app/blog/(post)/components/snippet";
import { Caption } from "@/app/blog/(post)/components/caption";
import { Callout } from "@/app/blog/(post)/components/callout";
import { YouTube } from "@/app/blog/(post)/components/youtube";
import { Ref, FootNotes, FootNote } from "@/app/blog/(post)/components/footnotes";
import { Blockquote as blockquote } from "@/app/blog/(post)/components/blockquote";
import {
  Table as table,
  THead as thead,
  TBody as tbody,
  TR as tr,
  TH as th,
  TD as td,
} from "@/app/blog/(post)/components/table";

export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    img: Image,
    blockquote,
    table,
    thead,
    tbody,
    tr,
    th,
    td,
    Tweet,
    Image,
    Figure,
    Snippet,
    Caption,
    Callout,
    YouTube,
    Ref,
    FootNotes,
    FootNote,
  };
}
