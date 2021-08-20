require 'spec_helper'
describe "Authentication" do
    subject { page }

    describe "sigin page" do
        before { visit sigin_path }

        it { should have_selector('h1', text: 'Iniciar sesión') }
        it { should have_selector ('title', text: 'Iniciar sesión') }
    end
end