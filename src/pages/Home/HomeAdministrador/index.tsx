import Avatar from 'avataaars';
import {useNavigate} from 'react-router-dom';
export default function HomeAdministrador(usuario: any){
	const navigate = useNavigate();
	const parsedUser = JSON.parse(localStorage.getItem('user') ?? '');
	// const avatar = parsedUser.avatar;
	return (
		<div onClick={ () => navigate('/editar-avatar')}>
			<Avatar
				style={{ width: '100px', height: '100px' }}
				avatarStyle='Circle'
				topType='ShortHairShortFlat'
				accessoriesType='Blank'
				hairColor='Brown'
				facialHairType='Blank'
				clotheType='Hoodie'
				clotheColor='Blue03'
				eyeType='Default'
				eyebrowType='Default'
				mouthType='Smile'
				skinColor='Pale' />
			<h3>Esta é a tela de Home Administrador {parsedUser.nome}</h3>
			<h3></h3>
			<p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
			</p>
		</div>
	);
}