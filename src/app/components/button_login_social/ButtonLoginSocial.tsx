import Image from "next/image";
import styles from "./ButtonLoginSocial.module.css";

type Props = {
  title: string;
}

const ButtonLoginSocial = ({ title }: Props) => {
  const titleToLowerCase = title.toLowerCase().trim();
  return (
    <button className={styles.button} type="button" title={`Login with ${title}`}>
      <Image
        src={`icon/icon_${titleToLowerCase}.svg`}
        alt={`${title} icon`}
        width={26}
        height={24}
      />
    </button>
  );
}

export default ButtonLoginSocial;