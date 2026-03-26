import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";var i=t((()=>{})),a,o,s=t((()=>{e(n(),1),i(),a=r(),o=({primary:e=!1,size:t=`medium`,backgroundColor:n,label:r,...i})=>{let o=e?`storybook-button--primary`:`storybook-button--secondary`;return(0,a.jsx)(`button`,{type:`button`,className:[`storybook-button`,`storybook-button--${t}`,o].join(` `),style:{backgroundColor:n},...i,children:r})},o.__docgenInfo={description:`Primary UI component for user interaction`,methods:[],displayName:`Button`,props:{primary:{required:!1,tsType:{name:`boolean`},description:`Is this the principal call to action on the page?`,defaultValue:{value:`false`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:`What background color to use`},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`How large should the button be?`,defaultValue:{value:`'medium'`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Button contents`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Optional click handler`}}}})),c,l,u,d,f,p,m;t((()=>{s(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components API/Button`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{backgroundColor:{control:`color`}},args:{onClick:c()}},u={args:{primary:!0,label:`Button`}},d={args:{label:`Button`}},f={args:{size:`large`,label:`Button`}},p={args:{size:`small`,label:`Button`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...p.parameters?.docs?.source}}},m=[`Primary`,`Secondary`,`Large`,`Small`]}))();export{f as Large,u as Primary,d as Secondary,p as Small,m as __namedExportsOrder,l as default};