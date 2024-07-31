export const Cuisines = [
  {
    name: 'Mexican',
  },
  {
    name: 'Italian',
  },
  {
    name: 'Japanese',
  },
  {
    name: 'Chinese',
  },
  {
    name: 'Indian',
  },
  {
    name: 'Greek',
  },
  {
    name: 'French',
  },
  {
    name: 'Spanish',
  },
  {
    name: 'Turkish',
  },
  {
    name: 'Lebanese',
  },
  {
    name: 'Vietnamese',
  },
  {
    name: 'Argentinian',
  },
  {
    name: 'Peruvian',
  },
  {
    name: 'Korean',
  },
  {
    name: 'Ethiopian',
  },
  {
    name: 'German',
  },
  {
    name: 'British',
  },
  {
    name: 'Irish',
  },
  {
    name: 'Swedish',
  },
  {
    name: 'Danish',
  },
  {
    name: 'Polish',
  },
  {
    name: 'Hungarian',
  },
  {
    name: 'Portuguese',
  },
].map((cuisine, index) => ({
  ...cuisine,
  id: index,
  selected: false,
})) as CuisineType[];

export const ACTIVE_COLOR = '#58b8d8';
export const INACTIVE_COLOR = '#B3B1B4';

export type CuisineType = {
  id: number;
  name: string;
  selected: boolean;
};
