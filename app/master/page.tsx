import { redirect } from 'next/navigation';

/**
 * There is no "all masters" design — the team lives in the OurMasters section
 * on /about, and each master has their own /master/<slug> page. The bare
 * /master route (linked from the "SEE ALL THE SPECIALISTS" button in
 * HeroAbout) forwards there.
 */
export default function MasterPage() {
  redirect('/about#masters');
}
