import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCtaButton extends Schema.Component {
  collectionName: 'components_components_cta_buttons';
  info: {
    displayName: 'ctaButton';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ComponentsLogo extends Schema.Component {
  collectionName: 'components_components_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
  };
}

export interface ComponentsNavBar extends Schema.Component {
  collectionName: 'components_components_nav_bars';
  info: {
    displayName: 'NavBar';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'components.logo'> & Attribute.Required;
    navbar: Attribute.Component<'components.nav-bar', true>;
    ctaButton: Attribute.Component<'components.cta-button'>;
    socialLink: Attribute.Component<'components.link', true>;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'components.logo'> & Attribute.Required;
    navbar: Attribute.Component<'components.nav-bar', true>;
    ctaButton: Attribute.Component<'components.cta-button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.cta-button': ComponentsCtaButton;
      'components.link': ComponentsLink;
      'components.logo': ComponentsLogo;
      'components.nav-bar': ComponentsNavBar;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
