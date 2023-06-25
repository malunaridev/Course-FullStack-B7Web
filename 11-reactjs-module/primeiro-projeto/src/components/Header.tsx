type Props = {
  title?: string;
  subtitle?: string;
  age?: string;
}

export const Header = ({ title }: Props) => {
    return (
      <header>
        <h1>{title}</h1>
        <hr/>
      </header>
    )
  }
