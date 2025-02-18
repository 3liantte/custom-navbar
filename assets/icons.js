import { AntDesign, Entypo, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

export const icons = {
    home: (props)=> <Entypo name="home" size={26} {...props} />,
    tutors: (props)=> <Ionicons name="library" size={26} {...props} />,
    institutions: (props)=> <FontAwesome name="institution" size={26} {...props} />,
    courses: (props)=> <Entypo name="graduation-cap" size={26} {...props} />,
}