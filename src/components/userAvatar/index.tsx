import { type } from "os";
import * as Styles from "./style";
import Avatar from 'avataaars';

type Props = {
    style: React.CSSProperties;
};

export default function UserAvatar(props : Props) {
    type AvatarOptions = {
		accessoriesType: string;
		avatarStyle: string;
		clotheColor: string;
		clotheType: string;
		eyeType: string;
		eyebrowType: string;
		facialHairColor: string;
		facialHairType: string;
		graphicType: string;
		hairColor: string;
		hatColor: string;
		mouthType: string;
		skinColor: string;
		topType: string;
	};

	const parsedUser = JSON.parse(localStorage.getItem('user') ?? '');
	const avatar = parsedUser.avatar;

    const avatarOptions: AvatarOptions = {
		avatarStyle: 'Circle',
		topType: avatar.topType,
		accessoriesType: avatar.accessoriesType,
		hairColor: avatar.hairColor,
		facialHairType: avatar.facialHairType,
		facialHairColor: avatar.facialHairColor,
		clotheType: avatar.clotheType,
		clotheColor: avatar.clotheColor,
		graphicType: avatar.graphicType,
		eyeType: avatar.eyeType,
		eyebrowType: avatar.eyebrowType,
		hatColor: avatar.hatColor,
		mouthType: avatar.mouthType,
		skinColor: avatar.skinColor,
	};

    return (
        <Avatar {...avatarOptions} className="avatar" style={props.style}></Avatar> 
    );
  }