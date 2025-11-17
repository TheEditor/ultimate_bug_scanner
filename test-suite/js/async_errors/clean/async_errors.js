async function fetchUserProfile(id) {
  try {
    const resp = await fetch(`/api/users/${id}`);
    return await resp.json();
  } catch (err) {
    console.error('Failed to load profile', err);
    throw err;
  } finally {
    console.log('profile fetch complete');
  }
}

function saveSettings(settings) {
  return window.api
    .save(settings)
    .then(() => console.log('saved!'))
    .catch((err) => {
      console.error('Save failed', err);
      throw err;
    })
    .finally(() => {
      console.log('settings sync complete');
    });
}

async function loadAllProjects(projectIds) {
  try {
    return await Promise.all(
      projectIds.map((id) => fetch(`/api/projects/${id}`))
    );
  } catch (err) {
    console.error('Project load failure', err);
    throw err;
  } finally {
    console.log('project fetch attempted');
  }
}

export async function bootstrapSession(userId) {
  await fetchUserProfile(userId);
  await saveSettings({ theme: 'dark' });
  await loadAllProjects([1, 2, 3]);
}
