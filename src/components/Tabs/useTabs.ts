import { ref } from 'vue';

const useTabs = (defaultTabName: string, onChange: (tabName: string) => void) => {
  const tabs = ref<HTMLDivElement[]>([]);
  const selectedTab = ref();

  const registerTab = (tabElement: HTMLDivElement) => {
    if (tabElement.getAttribute('data-name') === defaultTabName) {
      selectedTab.value = tabElement;
    }

    if (!tabs.value.length) {
      selectedTab.value = tabElement;
    }
    tabs.value.push(tabElement);
  };

  const selectTab = (tabElement: HTMLDivElement) => {
    selectedTab.value = tabElement;
    const name = tabElement.getAttribute('data-name');
    if (name) {
      onChange(name);
    }
  };

  return {
    tabs,
    selectedTab,
    registerTab,
    selectTab,
  };
};

export default useTabs;
