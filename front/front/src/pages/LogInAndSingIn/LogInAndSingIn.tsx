import { useEffect, useState } from 'react';
import { Tab } from './components/Tab';
import { tabsLogInData } from './constants';
import * as Styled from './LogInAndSingIn.styled';
import { TabEntranceValue } from './LogInAndSingIn.types';
import { useAppDispatch, useAppSelector } from '../../hooks/StoreHooks';
import { useMap } from '../../hooks/useMap';
import {
  getValidationDataLogInAction,
  onEmailUserAction,
  onPasswordUserAction,
} from '../../redux/reducers/auth';
import { logIn } from '../../redux/reducers/auth/async';
import { Loading } from '../../ui/Loading';

export function LogInAndSingIn() {
  const [tabs, setTabs] = useMap<number, TabEntranceValue>(new Map(tabsLogInData));
  const [activeTab, setActiveTab] = useState(0);

  const dispatch = useAppDispatch();
  const {
    loadingState,
    validationError,
  } = useAppSelector((state) => state.auth);

  // Метод для смены активного таба
  function setActiveTabAndNotActivePrevTab(isNext: boolean) {
    if (validationError) return;

    const tab = tabs.get(isNext ? activeTab + 1 : activeTab - 1) || tabs.get(1);
    const prevTab = tabs.get(activeTab);
    const isFirstTab = activeTab === (!isNext ? 1 : 0);
    const isTabsExist = tab && prevTab;


    if (isTabsExist && tabs.size === activeTab && isNext) {
      dispatch(logIn());
    }

    if (isTabsExist) {
      setTabs.set(tab.id, { ...tab, isActive: isFirstTab ? false : !tab.isActive });
      setTabs.set(prevTab.id, { ...prevTab, isActive: !prevTab.isActive });

      setActiveTab(isFirstTab ? 0 : tab.id);
    }
  }

  // Метод для установки произвольного таба
  function onClickSetActiveNavDotHandler(id: number) {
    if (validationError) return;

    const tab = tabs.get(id);
    const prevTab = tabs.get(activeTab);

    if (tab && prevTab && tab !== prevTab) {
      setTabs.set(id, { ...tab, isActive: true });
      setTabs.set(activeTab, { ...prevTab, isActive: false });
      setActiveTab(id);
    }
  }


  function onCLickSetActiveTabHandler() {
    setActiveTabAndNotActivePrevTab(true);
  }

  // Метод для установки первого таба
  function onClickSetActiveFirstTabHandler() {
    const tab = tabs.get(1);

    if (tab) {
      setTabs.set(tab.id, { ...tab, isActive: true });
      setActiveTab(tab.id);
    }
  }

  useEffect(() => {
    dispatch(getValidationDataLogInAction());
  }, [activeTab]);

  function onClickReturnHandler() {
    setActiveTabAndNotActivePrevTab(false);
  }

  return loadingState === 'loading' ? (
    <Loading/>
  ) : (
    <Styled.RootForm>
      {Array.from(tabs).map((tab) => (
        <Tab
          key={tab[1].id}
          { ...tab[1] }
          isActiveNavDot={!!activeTab}
          onClickSetActiveNavDotHandler={onClickSetActiveNavDotHandler}
          setValueAction={tab[1].label === 'Email' ? onEmailUserAction : onPasswordUserAction}
        />
      ))}

      <Styled.TipWrapper>
        <Styled.ValidateError isActive={!!activeTab}>
          {!!activeTab ? validationError : ''}
        </Styled.ValidateError>

        <Styled.TipContainer>
          <Styled.Tip
            isActive={!!activeTab}
            onClick={onClickReturnHandler}
          >
            Return
          </Styled.Tip>
          <Styled.Tip
            isActive={!!activeTab}
            onClick={onCLickSetActiveTabHandler}
          >
            Next
          </Styled.Tip>
        </Styled.TipContainer>
      </Styled.TipWrapper>

      <Styled.Entrance
        isActive={!activeTab}
        onClick={onClickSetActiveFirstTabHandler}
      >
        Log In
      </Styled.Entrance>
    </Styled.RootForm>
  );
}