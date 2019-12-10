/** Tree Shaking
 * import { cube } from './math.js';

  function component() {
  const element = document.createElement('pre');

   element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
   ].join('\n\n');

    return element;
  }

  document.body.appendChild(component());
 */

/** Code splitting */

async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import(
    /* webpackChunkName: "lodash" */ "lodash"
  );

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}
getComponent().then(component => {
  document.body.appendChild(component);
});
