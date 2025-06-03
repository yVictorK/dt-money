import { HeaderContainer, HearderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HearderContent>
        <img src={logoImg} alt='' />

        <Dialog.Root>
          <Dialog.DialogTrigger asChild >
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.DialogTrigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HearderContent>
    </HeaderContainer>
  )
}