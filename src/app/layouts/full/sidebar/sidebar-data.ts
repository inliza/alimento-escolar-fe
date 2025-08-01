import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'solar:atom-line-duotone',
    route: '/dashboard',
  },
   {
    displayName: 'Escuelas',
    iconName: 'solar:backpack-line-duotone',
    route: '/ui-components/schools',
  },
  {
    displayName: 'Conduces',
    iconName: 'solar:chart-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/dashboards/dashboard2',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    divider: true,
    navCap: 'Opciones',
  },
  {
    displayName: 'Chat',
    iconName: 'solar:chat-round-line-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/chat',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Calendar',
    iconName: 'solar:calendar-mark-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/calendar',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Email',
    iconName: 'solar:letter-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/email/inbox',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Kanban',
    iconName: 'solar:clapperboard-edit-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/kanban',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Contacts',
    iconName: 'solar:phone-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/contacts',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'ContactsApp',
    iconName: 'solar:phone-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/contact-list',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Courses',
    iconName: 'solar:book-bookmark-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/courses',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Employee',
    iconName: 'solar:user-id-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/employee',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Notes',
    iconName: 'solar:document-text-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/notes',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Tickets',
    iconName: 'solar:ticket-sale-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/tickets',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'ToDo',
    iconName: 'solar:airbuds-case-minimalistic-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/todo',
    chip: true,
    external: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Invoice',
    iconName: 'solar:bill-list-line-duotone',
    route: '',
    chip: true,
    
    children: [
      {
        displayName: 'List',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/apps/invoice',
        chip: true,
        external: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Detail',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/apps/viewInvoice/101',
        chip: true,
        external: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Create',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/apps/addInvoice',
        chip: true,
        external: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Edit',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/apps/editinvoice/101',
        chip: true,
        external: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Blog',
    iconName: 'solar:widget-4-line-duotone',
    route: 'apps/blog',
    chip: true,
    
    children: [
      {
        displayName: 'Post',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/apps/blog/post',
        chip: true,
        external: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Detail',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/apps/blog/detail/Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
        chip: true,
        external: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
    ],
  },

  {
    navCap: 'Ui Components',
    divider: true
  },
  {
    displayName: 'Badge',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'solar:danger-circle-line-duotone',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'solar:bookmark-square-minimalistic-line-duotone',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'solar:text-field-focus-line-duotone',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Forms',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Tables',
    iconName: 'solar:tablet-line-duotone',
    route: '/ui-components/tables',
  },
  {
    displayName: 'Expansion Panel',
    iconName: 'solar:inbox-archive-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/expansion',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Dialog',
    iconName: 'solar:bolt-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/dialog',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Divider',
    iconName: 'solar:menu-dots-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/divider',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Paginator',
    iconName: 'solar:tuning-2-bold-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/paginator',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Progress Bar',
    iconName: 'solar:restart-bold-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/progress',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Progress Spinner',
    iconName: 'solar:refresh-circle-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/progress-spinner',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Ripples',
    iconName: 'solar:branching-paths-up-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/ripples',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Slide Toggle',
    iconName: 'solar:round-alt-arrow-right-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/slide-toggle',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Slider',
    iconName: 'solar:tuning-3-bold-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/slider',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Snackbar',
    iconName: 'solar:layers-minimalistic-bold-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/snackbar',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Tabs',
    iconName: 'solar:box-minimalistic-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/tabs',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Toolbar',
    iconName: 'solar:balloon-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/toolbar',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Tooltips',
    iconName: 'solar:feed-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/ui-components/tooltips',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },

  {
    divider: true,
    navCap: 'Pages',
  },
  {
    displayName: 'Roll Base Access',
    iconName: 'solar:lock-password-unlocked-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/apps/permission',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Treeview',
    iconName: 'solar:bill-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/theme-pages/treeview',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Pricing',
    iconName: 'solar:dollar-minimalistic-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/theme-pages/pricing',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Account Setting',
    iconName: 'solar:accessibility-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/theme-pages/account-setting',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'FAQ',
    iconName: 'solar:question-square-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/theme-pages/faq',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Landingpage',
    iconName: 'solar:layers-minimalistic-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/landingpage',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Widgets',
    iconName: 'solar:widget-2-line-duotone',
    route: 'widgets',
    chip: true,
    
    children: [
      {
        displayName: 'Cards',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/widgets/cards',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Banners',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/widgets/banners',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Charts',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/widgets/charts',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
    ],
  },

  {
    navCap: 'Extra',
    divider: true
  },
  {
    displayName: 'Icons',
    iconName: 'solar:sticker-smile-circle-2-line-duotone',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'solar:planet-3-line-duotone',
    route: '/extra/sample-page',
  },

  {
    divider: true,
    navCap: 'Forms',
  },
  {
    displayName: 'Form elements',
    iconName: 'solar:password-minimalistic-input-line-duotone',
    route: 'forms/forms-elements',
    chip: true,
    
    children: [
      {
        displayName: 'Autocomplete',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/forms/forms-elements/autocomplete',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Button',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/forms/forms-elements/button',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Checkbox',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/forms/forms-elements/checkbox',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Radio',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/forms/forms-elements/radio',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Datepicker',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/forms/forms-elements/datepicker',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Form Layouts',
    iconName: 'solar:file-text-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/forms/form-layouts',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Form Horizontal',
    iconName: 'solar:align-horizonta-spacing-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/forms/form-horizontal',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Form Vertical',
    iconName: 'solar:align-vertical-spacing-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/forms/form-vertical',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Form Wizard',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/forms/form-wizard',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Toastr',
    iconName: 'solar:notification-lines-remove-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/forms/form-toastr',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },

  {
    divider: true,
    navCap: 'Tables',
  },
  {
    displayName: 'Tables',
    iconName: 'solar:tablet-line-duotone',
    route: 'tables',
    chip: true,
    
    children: [
      {
        displayName: 'Basic Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/basic-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Dynamic Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/dynamic-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Expand Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/expand-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Filterable Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/filterable-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Footer Row Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/footer-row-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'HTTP Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/http-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Mix Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/mix-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Multi Header Footer',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/multi-header-footer-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Pagination Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/pagination-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Row Context Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/row-context-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Selection Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/selection-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Sortable Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/sortable-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Sticky Column',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/sticky-column-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Sticky Header Footer',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/tables/sticky-header-footer-table',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Data table',
    iconName: 'solar:database-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/datatable/kichen-sink',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },

  {
    divider: true,
    navCap: 'Chart',
  },
  {
    displayName: 'Line',
    iconName: 'solar:align-top-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/charts/line',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Gredient',
    iconName: 'solar:bolt-circle-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/charts/gredient',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Area',
    iconName: 'solar:chart-square-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/charts/area',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Candlestick',
    iconName: 'solar:align-left-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/charts/candlestick',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Column',
    iconName: 'solar:chart-2-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/charts/column',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Doughnut & Pie',
    iconName: 'solar:pie-chart-2-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/charts/doughnut-pie',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Radialbar & Radar',
    iconName: 'solar:align-vertical-center-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/charts/radial-radar',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },

  {
    divider: true,
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'solar:lock-keyhole-minimalistic-line-duotone',
    route: '/authentication',
    children: [
      {
        displayName: 'Login',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/authentication/login',
      },
      {
        displayName: 'Side Login',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/authentication/login',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/authentication',
    children: [
      {
        displayName: 'Register',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/authentication/register',
      },
      {
        displayName: 'Side Register',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/authentication/side-register',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Forgot Pwd',
    iconName: 'solar:password-outline',
    route: '/authentication',
    chip: true,
    
    children: [
      {
        displayName: 'Side Forgot Pwd',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/authentication/side-forgot-pwd',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Boxed Forgot Pwd',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/authentication/boxed-forgot-pwd',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Two Steps',
    iconName: 'solar:siderbar-line-duotone',
    route: '/authentication',
    chip: true,
    
    children: [
      {
        displayName: 'Side Two Steps',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/authentication/side-two-steps',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
      {
        displayName: 'Boxed Two Steps',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'https://materialm-angular-main.netlify.app/authentication/boxed-two-steps',
        external: true,
        chip: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Error',
    iconName: 'solar:bug-minimalistic-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/authentication/error',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  {
    displayName: 'Maintenance',
    iconName: 'solar:settings-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/authentication/maintenance',
    external: true,
    chip: true,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: 'PRO',
  },
  
];
