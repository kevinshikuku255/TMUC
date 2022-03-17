import { useThemeContext } from '../Context';



function Colors() {
    const  [ { Theme } ] = useThemeContext();

    const Light = {
        background: "burlywood",
        farground: "#e8d0b1",
        brown: "brown",
        primary: "black", // text color for paragraphs, labels and other essentials
        secondary: "blurlywood" //text color like form microcopy, captions, and table headings
    }
    
    const Dark = {
        background: "black",
        brown: "brown",
        farground: "#464340",
        primary: "white", // text color for paragraphs, labels and other essentials
        secondary: "blurlywood" //text color like form microcopy, captions, and table headings
        
    }
   const themeColor = Theme === "Dark" ? Dark : Theme === "Light" ? Light : null
   return  themeColor
}

export default Colors;