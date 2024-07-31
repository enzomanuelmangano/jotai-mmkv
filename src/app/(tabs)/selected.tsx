import { useCuisines } from '../../hooks/useCuisines';
import { CuisinesList } from '../../components/cuisines-list';

export default function Selected() {
  const { filteredCuisines, toggleCuisine } = useCuisines();

  return (
    <CuisinesList
      title="Favourite Cuisines"
      cuisines={filteredCuisines}
      onPressItem={toggleCuisine}
    />
  );
}
