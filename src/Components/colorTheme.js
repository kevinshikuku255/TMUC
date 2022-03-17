import { useThemeContext } from '../Context';



function Colors() {
    const  [ { Theme } ] = useThemeContext();

    const Light = {
        background: "burlywood",
        farground: "#e8d0b1",
        brown: "brown",
        primary: "black", // text color for paragraphs, labels and other essentials
        secondary: "#e1ac66" //text color like form microcopy, captions, and table headings
    }
    
    const Dark = {
        background: "black",
        brown: "brown",
        farground: "#272625",
        primary: "white", // text color for paragraphs, labels and other essentials
        secondary: "#2b2927" //text color like form microcopy, captions, and table headings
        
    }
   const themeColor = Theme === "Dark" ? Dark : Theme === "Light" ? Light : null
   return  themeColor
}

export default Colors;