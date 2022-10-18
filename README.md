# React_modal_components

This project is Modal components for React.
It is used to validate a form
## Install

```bash
npm install --save @oliviag-dev/simple-npm-modal-react
```

or

```bash
yarn add @oliviag-dev/simple-npm-modal-react
```
## Usage

1-import
```bash
import { Modal } from '@oliviag-dev/simple-npm-modal-react';
```

2-whrite the logic to sho or hide the modal
```bash
const [isShow, setIsShow] = useState(true)
```

3-whrite the logic for close the modal
```bash
const closeModal = () = { setIsShow(!isShow) }
```

4-use modal
```bash
<Modal text='your text!' closeModal={(e) => closeModal()} />
```


