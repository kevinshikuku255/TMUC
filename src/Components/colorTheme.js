import { useThemeContext } from '../Context';



function Colors() {
    const  [ { Theme } ] = useThemeContext();

    const Light = {
        background: "burlywood",
        farground: "#e8d0b1",
        brown: "brown",
        link: '#4a4300',
        primary: "black", // text color for paragraphs, labels and other essentials
        secondary: "#e1ac66" //text color like form microcopy, captions, and table headings
    }
    
    const Dark = {
        background: "black",
        brown: "brown",
        farground: "#272625",
        link: "#ff9203",
        primary: "#cecece", // text color for paragraphs, labels and other essentials
        secondary: "#151414" //text color like form microcopy, captions, and table headings
        
    }
   const themeColor = Theme === "Dark" ? Dark : Theme === "Light" ? Light : null
   return  themeColor
}

export default Colors;