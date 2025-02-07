import { AntDesign, Entypo, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <Entypo name="home" size={26} {...props} />,
    explore: (props)=> <Ionicons name="library" size={26} {...props} />,
    create: (props)=> <FontAwesome name="institution" size={26} {...props} />,
    profile: (props)=> <Entypo name="graduation-cap" size={26} {...props} />,
}