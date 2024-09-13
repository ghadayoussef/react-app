import componentsImg from './assets/components.png'
import propsImg from './assets/config.png'
import jsxImg from './assets/jsx-ui.png'
import stateImg from './assets/state-mgmt.png'


export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Components',
        description: 'the core ui building block',
    },
    {
        image: jsxImg,
        title: 'JSX',
        description: 'return potential dynamic HTML isdh code',
    },
    {
        image: propsImg,
        title: 'Props',
        description: 'make component reusable',
    },
    {
        image: stateImg,
        title: 'State',
        description: 'react managed data which when change changes the compenents',
    }
]

export const EXAMPLES = {
    components: {
        image: componentsImg,
        title: 'Components',
        description: 'the core ui building block',
        code: 'components code'
    },
    jsx: {
        image: jsxImg,
        title: 'JSX',
        description: 'return potential dynamic HTML isdh code',
        code: 'jsx code'
    },
    props: {
        image: propsImg,
        title: 'Props',
        description: 'make component reusable',
        code: 'props code'
    },
    state: {
        image: stateImg,
        title: 'State',
        description: 'react managed data which when change changes the compenents',
        code: 'state code'
    }
}