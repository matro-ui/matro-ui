import React from 'react'
import s from './index.module.css';
import classNames from '../../../tools/classNames';

const defaultProps = {
  value: false,
  onChange: () => { },
  name: "",
  checked: false,
  toggle: false,
  linear: false
}

const Checkbox = (props = defaultProps) => {
  const {
    name,
    value,
    disabled,
    checked,
    toggle,
    linear
  } = props;
  const defaultValue = value || checked || "";
  const [init, setInit] = React.useState(false);
  const [valueLoc, setValueLoc] = React.useState(defaultValue);

  const onChange = (e) => {
    if (!disabled) {
      if (props.onChange)
        props.onChange(!!e.target.checked);
      else
        setValueLoc(!!e.target.checked);
    }
  }

  // To prevent init anim
  React.useEffect(() => {
    setInterval(() => setInit(true), 200);
  })

  return (
    <label
      className={classNames({
        ["mtui-checkbox"]: true,
        [s.parent]: true,
        [s.disabled]: disabled,
        [s.toggle]: toggle,
        [s.linear]: linear,
      })}
    >
      {/* input hidden  */}
      <input {...{
        type: "checkbox",
        checked: props.onChange ? defaultValue : valueLoc,
        className: s.input,
        onChange,
        name
      }} />

      {/* input visible  */}
      <span className={s.checkbox}>
        {(props.onChange ? defaultValue : valueLoc) && !toggle ? (
          <svg
            className={s.svg}
            viewBox="0 0 11 11"
            style={{
              display: "inline-block",
              fill: "none",
              strokeWidth: 2,
              stroke: "currentcolor",
            }}
          >

            {init ?
              <polyline>
                <animate
                  attributeName="points"
                  dur="200ms"
                  from="2,4 5,7 5,7"
                  to="2,5 5,8 9.5,3"
                  fill="freeze"
                  begin="0ms" />
              </polyline>
              :
              <polyline points="2,5 5,8 9.5,3" />}

          </svg>
        ) : null}
      </span>

      {/* label  */}
      {props.children ? <span className={s.label}>{props.children}</span> : ""}
    </label>
  )
}

export default Checkbox