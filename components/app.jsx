/* app.jsx — Main App wrapper with Tweaks integration */

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  return (
    <React.Fragment>
      <Nav tweaks={tweaks} />
      <HeroSection tweaks={tweaks} />
      <AboutSection />
      <ProductSection tweaks={tweaks} />
      <WhySection tweaks={tweaks} />
      <UseCasesSection />
      <ProcessSection />
      <CtaBanner tweaks={tweaks} />
      <ComplianceStrip />
      <Footer />

      <TweaksPanel>
        <TweakSection title="Hero Layout">
          <TweakRadio
            label="Style"
            value={tweaks.heroVariant}
            options={[
              { label: 'Dark', value: 'dark' },
              { label: 'Light', value: 'light' },
              { label: 'Bold', value: 'bold' },
            ]}
            onChange={v => setTweak('heroVariant', v)}
          />
        </TweakSection>

        <TweakSection title="CTA Buttons">
          <TweakRadio
            label="Primary Button"
            value={tweaks.ctaStyle}
            options={[
              { label: 'Emerald/White', value: 'emerald-on-white' },
              { label: 'White/Emerald', value: 'white-on-emerald' },
              { label: 'Accent Yellow', value: 'accent' },
            ]}
            onChange={v => setTweak('ctaStyle', v)}
          />
        </TweakSection>

        <TweakSection title="Card Styling">
          <TweakRadio
            label="Card Treatment"
            value={tweaks.cardStyle}
            options={[
              { label: 'Elevated', value: 'elevated' },
              { label: 'Outlined', value: 'outlined' },
              { label: 'Flat', value: 'flat' },
            ]}
            onChange={v => setTweak('cardStyle', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
