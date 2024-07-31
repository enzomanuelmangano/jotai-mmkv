import { useCuisines } from '../../hooks/useCuisines';
import { CuisinesList } from '../../components/cuisines-list';

export default function Home() {
  const { cuisines, toggleCuisine } = useCuisines();

  return (
    <CuisinesList
      title="What are your favourite cuisines?"
      cuisines={cuisines}
      onPressItem={toggleCuisine}
    />
  );
}
