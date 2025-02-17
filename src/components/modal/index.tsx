import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface ModalProps {
    children: React.ReactNode;
    title?: string;
    btnText?: string;
    btnClass?: string;
}

const Modal = ({ children, btnClass, btnText, title }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={btnClass}>{btnText ?? "Abrir"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;