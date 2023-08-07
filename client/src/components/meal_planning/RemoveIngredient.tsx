import Input from '../form_inputs/Input';
interface RemoveIngredientProps {
	ingredient: string;
	inputChanged: (value: string, valid: boolean) => void;
}

const RemoveIngredient: React.FC<RemoveIngredientProps> = ({ingredient, inputChanged}) => {
	return  <Input name='removeInput' value={ingredient} label='Remove these ingredients' onInput={inputChanged} />;
				

};

export default RemoveIngredient;
