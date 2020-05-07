export type SelectableProps = {
  id: string | number;
  selected: boolean;
  title: string;
  onPress: (id: string | number) => void;
};
