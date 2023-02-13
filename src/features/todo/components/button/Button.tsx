import styled from "styled-components";

interface IButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

interface IStyledButtonProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
}

const StyledButton = styled.div<IStyledButtonProps>`
  background: ${(props) => props.backgroundColor};
  width: ${(props) =>
    props.size === "small"
      ? "60px"
      : props.size === "medium"
      ? "80px"
      : "100px"};
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

const Button = ({
  size = "medium",
  backgroundColor,
  label,
  ...props
}: IButtonProps) => {
  return (
    <StyledButton backgroundColor={backgroundColor} size={size}>
      {label}
    </StyledButton>
  );
};

export default Button;
