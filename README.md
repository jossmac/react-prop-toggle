# React Prop Toggle

A safe, declarative way to influence the styles and attributes of nodes outside
your app's tree.

By storing the initial values of the target node when mounting
`react-prop-toggle` is able to safely return styles and attributes when
unmounted.

```jsx
import PropToggle, { SimpleToggle } from 'react-prop-toggle';

// Use PropToggle with `isActive` prop
<PropToggle
  isActive={this.state.someCondition}
  attributes={{ 'data-variant': 'true' }}
  styles={{ background: 'red' }}
/>

// Or use SimpleToggle for a component that's already conditionally rendered
class Modal extends Component {
  render() {
    return (
      <div>
        <SimpleToggle
          attributes={{ 'data-variant': 'true' }}
          styles={{ background: 'red' }}
        />
      </div>
    );
  }
}
```
