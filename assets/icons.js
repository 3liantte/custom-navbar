import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

export const icons = {
    home: (props)=> <Entypo name="home" size={26} {...props} />,
    tutors: (props)=> <FontAwesome5 name="chalkboard-teacher" size={26} {...props} />,
    institutions: (props)=> <FontAwesome name="institution" size={26} {...props} />,
    courses: (props)=> <Entypo name="graduation-cap" size={26} {...props} />,
    library: (props)=> <Ionicons name="library" size={26} {...props} />,
}